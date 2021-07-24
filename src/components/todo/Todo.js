import React , { useState,useEffect } from 'react'
import "./style.css";

function Todo() {

    const getLocalData = ()=>{
       const toDo =  localStorage.getItem("items");
       if (toDo){
           return JSON.parse(toDo)
       }
       else{
           return []
       }
    }
    const [text, settext] = useState("");
    const [list, setlist] = useState(getLocalData());
    const [editItems, seteditItems] = useState("")
    const [toggleButton, settoggleButton] = useState(false)
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(list));
    }, [list])
    const addItem = ()=>{
        if(!text){
            alert("Please Fill the Field")
        }
        else if(text && toggleButton){
            setlist(
                list.map( (currentEle)=>{
                    if(currentEle.id === editItems){
                        return {...currentEle,name:text}
                    }
                    else{
                        return currentEle;
                    }
                } )
            )
            seteditItems(null);
            settext("");
            settoggleButton(false);
        }
        else{
            const dataItem = {
                id : new Date().getTime().toString(),
                name:text
            }
            setlist( [...list,dataItem] )
            settext("")
        }
        
    }

    const deleteItem = (id)=>{
        const updateItem = list.filter((currentEl)=>{
           return currentEl.id !== id;
        })
        setlist(updateItem);
        
    }
    const editItem = (id)=>{
        const EditItem = list.find( (currentEle)=>{
            return currentEle.id === id
        } )
        seteditItems(id);
        settext(EditItem.name);
        settoggleButton(true);
    }
    const removeAll = ()=>{
        setlist([]);
    }
    return (
        <>
          <div className="main-div">
            <div className="child-div">
            <figure>
                <img src="https://img.icons8.com/nolan/64/checklist.png" alt="todologo" />
                <figcaption>Add Your List Here ✌</figcaption>
            </figure>
            <div className="addItems">
                <input
                type="text"
                placeholder="✍ Add Item"
                value={text}
                onChange={(event)=>{settext(event.target.value)}}
                />
                {toggleButton ? (
                <i className="far fa-edit add-btn" onClick={addItem}></i>
                ) : (
                <i className="fa fa-plus add-btn" onClick={addItem}></i>
                )}
            </div>
            {/* show our items  */}
            <div className="showItems">
                {
                    list.map( (listItem,index)=>{
                        return(
                            <div className="eachItem" key={listItem.id} >
                                <h3>{listItem.name}</h3>
                                <div className="todo-btn">
                                    <i
                                    className="far fa-edit add-btn"
                                    onClick={()=>editItem(listItem.id)}
                                    ></i>
                                    <i
                                    className="far fa-trash-alt add-btn"
                                    onClick={()=>deleteItem(listItem.id)}
                                    ></i>
                                </div>
                            </div>
                        )
                    } )
                }
                
            </div>

            {/* rmeove all button  */}
            <div className="showItems">
                <button
                    className="btns effect04"
                    data-sm-link-text="Remove All"
                    onClick={removeAll}
                >
                <span> CHECK LIST</span>
                </button>
            </div>
            </div>
        </div>  
        </>
    )
}

export default Todo
