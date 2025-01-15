import React,{useEffect} from 'react'
import { DevTool } from "@hookform/devtools";
import { useForm,useFieldArray } from "react-hook-form";

export default function AddRecipeForm() {

    const { register, handleSubmit, control,watch,setValue, formState: { errors } } = useForm({
        defaultValues:{recipeid:'',recipe_name:'',cooking_time:'',steps:{
            step1:'',
            step2:'',
        },
        ingredients:['',''],
        phnumbers:[{number:''}],totalSteps:1,
    
    
    },mode:'onChange'}  );
    const { fields,append} = useFieldArray({
        control, 
        name: "phnumbers", 
      });

      useEffect(() => {
        const { unsubscribe } = watch((value) => {
         
        })
        return () => unsubscribe()
      }, [watch])

    const onSubmit = (data) => {

        console.log(data)
    }

    const handleSetValue=()=>{
        setValue('recipe_name','daal')
    }

    const onError=(errors)=>{

        console.log(errors)
    }

  return (
    <div>

<form onSubmit={handleSubmit(onSubmit,onError)} noValidate >

<label htmlFor="">recipe_id</label>
<input type="text" id='recipeid' {...register("recipeid",{required: {value:true, message:'username required'},validate: {noBiryani: (fieldValue)=>{return fieldValue!=='biryani'||'Enter diffrent name'}  },nameAvialbel: async(fieldValue)=>{ 
    const res= await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
    const data= await res.json();

    return data.length === 0 || 'recipeid already exists';

 }}   )} />
<p style={{color:'red'}}> {errors?.recipeid?.message}</p>
<br/>
<label htmlFor="">recipe_name</label>

<input type="text" id='recipe_name' {...register("recipe_name",{required:{value:true,message:'recipename is required'} })}/>
<p style={{color:'red'}}>{errors?.recipe_name?.message}</p>
<br/>
<label htmlFor="">CookingTime</label>

<input type="text"  id='cooking_time'  {...register("cooking_time",{required: {value:true,message:'CookingTime is required'}})}/>
<p style={{color:'red'}}>{errors?.cooking_time?.message}</p>


<label htmlFor="">Step1</label>
<input type="text"  id='step1'  {...register("steps.step1",{required: {value:true,message:'step1 is required'}})}/>
<p style={{color:'red'}}>{errors?.steps?.step1?.message}</p>

<label htmlFor="">totalSteps</label>
<input type="number"  id='totalSteps'  {...register("totalSteps",{valueAsNumber:true,  required: {value:true,message:'totalSteps is required'}})}/>
<p style={{color:'red'}}>{errors?.totalSteps?.message}</p>
<br/>

<label htmlFor="">recipeCreated</label>
<input type="date"  id='recipeCreated'  {...register("recipeCreated",{valueAsDate:true,  required: {value:true,message:'recipeCreated is required'}})}/>
<p style={{color:'red'}}>{errors?.recipeCreated?.message}</p>
<br/>

<label htmlFor="">Step2</label>
<input type="text"  id='step2'  {...register("steps.step2",{disabled:true,  required: {value:true,message:'step2 is required'}})}/>
<p style={{color:'red'}}>{errors?.steps?.step2?.message}</p>

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

    <button type="button" onClick={handleSetValue}>set Recipe Name
    
    </button>

    <br/>
<button>Submit</button>
</form>
<DevTool control={control} /> 
    </div>
  )
}
