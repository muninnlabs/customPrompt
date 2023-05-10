import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

export function CustomRouterPrompt({
  when,
  title = 'Leave page?',
  okText = 'Leave',
  cancelText = 'Cancel',
  content = 'Changes you made will not be saved',
  onLeave = () => {}
}) {
  const history = useHistory()

  const [showPrompt, setShowPrompt] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  const unblockRef = useRef()

  function handleShowModal() {
    setShowPrompt(true)
  }

  function handleCancel() {
    setShowPrompt(false)
  }

  useEffect(() => {
    unblockRef.current = history.block((location) => {
      if (when) {
        setCurrentPath(location.pathname+location.search)
        handleShowModal()
        return false
      }
      return true
    })
    return () => {
      unblockRef.current && unblockRef.current()
    }
  }, [when, history])

  function handleOK() {
    if (unblockRef) {
      unblockRef.current()
    }
    setShowPrompt(false)
    history.push(currentPath)
    onLeave()
  }
  
  const confirm = () => {
    Modal.confirm({
      title: title,
      icon: <ExclamationCircleOutlined />,
      content: content,
      okText: okText,
      cancelText: cancelText,
      centered: true,
      onOk: () => handleOK(),
      onCancel: () => handleCancel()
    })
  }

  useEffect(() => {
    if (showPrompt) {
      confirm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPrompt])

  return null
    
  
}