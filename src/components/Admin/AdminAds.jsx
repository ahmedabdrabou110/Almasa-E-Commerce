import React,{useState} from 'react'
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Col, Form } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast';
import shortid from 'shortid';
import { fireStore, storage } from '../../firebase';

const AdminAds = () => {
    const [image , setImage] = useState(null);
    const types =["image/jpg" , "image/jpeg", "image/png" , "image/jfif"];
    const handleProductImg = e =>{
        let selectedImg = e.target.files[0];
        if(selectedImg) {
            if(selectedImg&&types.includes(selectedImg.type)) {
                setImage(selectedImg);
            }else{
                setImage(null);
                toast.error("من فضلك ادخل امتداد صورة مناسب ");
            }
        }else{
            toast.error("من فضلك ادخل الصورة"); 
        }
    }
    const handleAdsSumbit = e =>{
        e.preventDefault();
        const storageRef = ref(storage , `Ads-image/${image?.name}`);
        const uploadTask = uploadBytesResumable(storageRef , image);
        
        uploadTask.on("state_changed" , snapshot =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(progress)
        }, error => toast.error(error.message) , ()=>{
                getDownloadURL(storageRef).then(url => {
                    console.log(url)
                    addDoc(collection(fireStore , "ads"), {
                        id:shortid.generate(),
                        image:url, 
                        
                    }).then(()=>{
                        toast.success("تم اضافة صورة الاعلان بنجاح  ");
                        setTimeout(()=>{
                            window.location.reload();
                        }, 500)
                        setImage(null);
                    }).catch(error => {
                        toast.error("فشل اضافة صورة الاعلان");
                    })
                })
        })
        
    }
  return (
    <Form onSubmit={handleAdsSumbit}>
        <Toaster />
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>اضف صورة للاعلان</Form.Label>
            <Form.Control onChange={handleProductImg} type="file" required />
        </Form.Group>
        <Col sm="8" className="d-flex justify-content-center ">
            <button type='submit' className="btn-save d-inline mt-2  " > أضافة أعلان</button>
        </Col>
    </Form>
  )
}

export default AdminAds