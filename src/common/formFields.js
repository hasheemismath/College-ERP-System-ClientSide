import React from 'react';

const FormFields =({id,onChange,value,type,className,inputtype})=> {


        return (
            <div>
                    {inputtype === 'input' ? <input onChange={onChange}  value={value}
                            type={type} className="form-control" id={id}
                    /> :
                        <select  value={value} onChange={onChange} className="custom-select mr-sm-2" id={id}>
                                <option select="true">Choose...</option>
                                <option value="student">Student</option>
                                <option value="instructor">Instructor</option>
                                <option value="admin">Admin</option>
                    </select>
                    }
            </div>
        );

}

export default FormFields;