import React from 'react'

export default function TextValidators(e) {
    let {name,value} = e.target
 switch(name)
 {
case 'name' :
    if(!value || value.length===0)
        return name +" feild is maindatory"
    else if(value.length<3 || value.length>100)
        return name +"feild length must be 3 to 100 characters"
    else
        return ""
    default:
        return ""
 }
}
