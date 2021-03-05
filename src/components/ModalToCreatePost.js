import { useFormik } from 'formik';
import "../styles/ModalToCreatePost.css"
import { Step2 } from '../components/primary-survey/Step2'
import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react';
export default function ModalToCreatePost () {
    const [postActive,setpostActive]=useState(true);
    function ExitPost(){
        if(!postActive){
            document.querySelector('#body').setAttribute('class','bodyOfPageOpacity')
            document.querySelector('#ModalCreatePost').style.display="flex"
            setpostActive(true)     
        }
        else{
            document.querySelector('#body').setAttribute('class','bodyOfPage')
            document.querySelector('#ModalCreatePost').style.display="none"
            setpostActive(false)
        }     
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            tech:'',
            comment: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <>
     
    <div id="ModalCreatePost"className="ModalCreatePost">
       
    <form className="ModalForm"onSubmit={formik.handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <h4>Create Post</h4>
        
        <label htmlFor="name">Tittle</label>
        <input id="name" value={formik.values.name} onChange={formik.handleChange}/>
        <label htmlFor="comment">Desribe your project</label>
        <textarea className="describeProject"id="comment" value={formik.values.comment} onChange={formik.handleChange}/>
        <input className="submit"type="submit" value="Wyślij"/>
        {/* <div className="tech">
             <Step2 />
        </div> */}
        <button onClick={ExitPost} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </form>
    </div>
    </>
}