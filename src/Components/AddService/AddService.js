
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    
    //react hook form used to get the data from add a service
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('https://haunted-dungeon-90790.herokuapp.com/offers', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully added')
                reset();
            }
        })
    }
  
   
    return (
        <div>
            <div className="w-50 mx-auto py-5 add-a-service-div rounded mt-5">
                <h2 className="text-center mb-4 mx-3">Add a new service</h2>
            <div className="ms-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              
            <div className="row mb-3">
                      {/* keys 100-105 are taken */}
                    <label htmlFor="inputId" className="col-sm-2 col-form-label">Offer Key</label>
                    <div className="col-sm-10">
                    <input type="number" className="w-75 w-sm-100 rounded border-1 input-height" {...register("key")} placeholder="start with 106" />
                    </div>
                </div>
           
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Offer Name</label>
                    <div className="col-sm-10">
                    <input className="w-75 w-sm-100 rounded border-1 input-height" {...register("name", { required: true, maxLength: 20 })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPrice" className="col-sm-2 col-form-label input-height">Price</label>
                    <div className="col-sm-10">
                    <input className="w-75 rounded border-1" type="number"  {...register("price")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Caption</label>
                    <div className="col-sm-10">
                    <textarea className="w-75 rounded border-1 input-textarea" {...register("description")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputImage" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <textarea className="w-75 rounded border-1 input-textarea" {...register("detailedInfo")}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputImage" className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                    <input className="w-75 rounded border-1 input-height" {...register("image")}/>
                    </div>
                </div>
              
                    <input type="submit" className="btn button-bg text-white"/>
                
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddService;