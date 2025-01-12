import React from 'react'
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export default function AddRecipeForm() {

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log(data)
    }

  return (
    <div>

<form onSubmit={handleSubmit(onSubmit)} noValidate >

<label htmlFor="">recipe_id</label>
<input type="text" id='recipeid' {...register("recipeid",{required: {value:true, message:'username required'},validate:(fieldValue)=>{return fieldValue!=='biryani'||'Enter diffrent name'} })} />
<p style={{color:'red'}}> {errors?.recipeid?.message}</p>
<br/>
<label htmlFor="">recipe_name</label>

<input type="text" id='recipe_name' {...register("recipe_name",{required:{value:true,message:'recipename is required'} })}/>
<p style={{color:'red'}}>{errors?.recipe_name?.message}</p>
<br/>
<label htmlFor="">CookingTime</label>

<input type="text"  id='cooking_id'  {...register("cooking_id",{required: {value:true,message:'CookingTime is required'}})}/>
<p style={{color:'red'}}>{errors?.cooking_id?.message}</p>
<br/>
<button>Submit</button>
</form>
<DevTool control={control} /> 
    </div>
  )
}
