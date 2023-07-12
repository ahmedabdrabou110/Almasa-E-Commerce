import React , {useState , useEffect}from 'react'
import { Form } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import useCurrentId from '../../Hooks/CurrentIdUserHook';
import { Toaster, toast } from 'react-hot-toast';
import { auth, fireStore } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
const RatePost = () => {
    const [value, setValue] = useState();
  const [hover, setHover] = useState(-1);
  const [message , setMessage] = useState("")
  const uid = useCurrentId();
  const getCurrentUser = ()=>{
      const [user, setUser] = useState("");
    // console.log(first)
    const usersCollectionRef = collection(fireStore, "users");
    useEffect(()=>{
      onAuthStateChanged(auth,(user) => {
        if(user) {
          getDocs(usersCollectionRef ,user.uid).then(snapshot => {
            const item = snapshot.docs.filter(email => email.data().id === user.uid);
            setUser(item[0].data().displayName)
          }).catch(error => {
            console.log("error")
          })
        }
        // console.log(user.email)
      })
    },[])

    return user ;
  }
  const user = getCurrentUser();
  
  const handleSubmit = e=>{
    e.preventDefault();
    const collectionRef = collection(fireStore , "comments");
    addDoc(collectionRef , {
        message,
        rate:value || 3 ,
        id:uid,
        Name:user,
    }).then(()=>{
        toast.success("شكرا لاضافة تعليقك ");
        setMessage("")
        setValue(0);
    }).catch(()=>{
        toast.error("حدث خطا ما ");
    })
  }
  return (
    <div className='mb-3'>
        <Toaster />
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='m-2'>أضف رايك عن المنتجات</Form.Label>
            <Form.Control as="textarea" required rows={3} value={message} onChange={e => setMessage(e.target.value)}  />
        </Form.Group>
        <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
      marginRight={"auto"}
    >
      <Rating
        name="hover-feedback"
        value={value}
        aria-required={'true'}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
        <div className=" d-flex justify-content-end al">
              <button type='submit' className="product-cart-add px-3 mt-2 py-2 text-center d-inline">اضف تعليق</button>
            </div>
        </Form>
    </div>
  )
}

export default RatePost