import React from 'react'
import { Button, Form, Upload} from 'antd';
const Fileupload = () => {
  return (
    <>
        <Form>
          <Upload>
            <Button>Upload file</Button>
          </Upload>
        </Form>
    </>
  )
}

export default Fileupload