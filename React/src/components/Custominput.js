import React from 'react'


const Custominput = (props) => {
    const{type, label, i_id, i_class, value, onChange} = props;
  return (
    <div className="form-floating mb-3">
      <input 
        type={type} 
        className={'form-control ${i_class}'} 
        id={i_id} 
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={label}>{label}</label>
      
</div>
  )
}

export default Custominput