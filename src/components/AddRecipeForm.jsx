import React from 'react'
import { DevTool } from "@hookform/devtools";
import { useForm,useFieldArray } from "react-hook-form";

export default function AddRecipeForm() {

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues:{recipeid:'',recipe_name:'',cooking_id:'',steps:{
            step1:'',
            step2:'',
        },
        ingredients:['',''],
        phnumbers:[{number:''}]
    
    
    }});
    const { fields,append} = useFieldArray({
        control, 
        name: "phnumbers", 
      });

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


<label htmlFor="">Step1</label>
<input type="text"  id='step1'  {...register("steps.step1",{required: {value:true,message:'step1 is required'}})}/>
<p style={{color:'red'}}>{errors?.steps?.step1?.message}</p>

<label htmlFor="">Step2</label>
<input type="text"  id='step2'  {...register("steps.step2",{required: {value:true,message:'step2 is required'}})}/>
<p style={{color:'red'}}>{errors?.steps?.step2?.message}</p>
<br/>


<label htmlFor="">ingredient1</label>
<input type="text"  id='step2'  {...register("ingredients.0",{required: {value:true,message:'ingredients is required'}})}/>


<br/>

<label htmlFor="">ingredient2</label>
<input type="text"  id='step2'  {...register("ingredients.1",{required: {value:true,message:'ingredients is required'}})}/>
<label htmlFor="">list of phone numbers</label>
{fields.map((field, index) => (
      <input
        key={field.id} // important to include key with field's id
        {...register(`phnumbers.${index}.number`)} 
      />
    ))}
    <button type="button" onClick={()=>append({number:''})}>Add phone numbers
    
    </button>

    <br/>
<button>Submit</button>
</form>
<DevTool control={control} /> 
    </div>
  )
}
