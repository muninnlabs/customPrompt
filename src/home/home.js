import React, { useState } from 'react'
import { CustomRouterPrompt } from '../components/customPrompt'
import { Switch } from 'antd';

export default function Home() {
  const [hasChanges, setHasChanges] = useState(false)

  const onChange = () => {
    setHasChanges(!hasChanges)
  };

  return (
    <>
    <CustomRouterPrompt when={hasChanges}/>
    <Switch 
    checkedChildren="can change" 
    unCheckedChildren="canot change"
     defaultChecked 
     onChange={onChange} 
     />
      <div>this is home</div>
    </>
  )
}
