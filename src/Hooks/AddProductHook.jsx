import React, {useState} from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-hot-toast";
import { fireStore, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import shortid from "shortid";
import { useCollectionData } from "react-firebase-hooks/firestore";
const useAddProduct = ()=>{
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');
    const [discountPrice , setDiscountPrice] = useState("");
    const [image , setImage] = useState(null);
    const [price , setPrice] = useState("");
    const [mainCategory , setMainCategory] = useState("");
    const [secondaryCategory , setSecondaryCategory] = useState([]);
    const [brand , setBrand] = useState("");
    const [progresspercent, setProgresspercent] = useState(0);
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


    const onSelect = (selectedList) => {
        setSecondaryCategory(selectedList);
    }
    const onRemove = () => {

    }

    

    const options = [
        { name: "عبايات ناعمة ", id: 1 },
        { name: "عبايات مطرزة", id: 2 },
        { name: "عبايات  سادة", id: 3 },
        { name: "عبايات ملونة ", id: 4 },
    ];


    const handleAddProducts  = async e =>{
        e.preventDefault();
        const storageRef = ref(storage , `product-images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef , image);
        uploadTask.on("state_changed" , snapshot =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
        }, error => toast.error(error.message) , ()=>{
                getDownloadURL(storageRef).then(url => {
                    addDoc(collection(fireStore , "products"), {
                        title , 
                        description , 
                        price:Number(price),
                        discountPrice , 
                        mainCategory,
                        secondaryCategory ,
                        image:url, 
                        brand,
                        productId:shortid.generate()
                    }).then(()=>{
                        toast.success("تم اضافة المنتج بنجاح");
                        setTitle("");
                        setDescription("");
                        setPrice("")
                        setDiscountPrice("");
                        setMainCategory("")
                        setSecondaryCategory("")
                        setImage(null);
                    }).catch(error => {
                        toast.error("فشل اضافة المنتج");
                    })
                })
        })
        
    }

    return {
        title,setTitle,description , setDescription , discountPrice, setDiscountPrice,price,setPrice ,image, setImage ,mainCategory, setMainCategory ,secondaryCategory , setSecondaryCategory, brand ,setBrand,
        handleProductImg,onSelect , onRemove , options , handleAddProducts
    }
}

export default useAddProduct ;