import { BagHandle, HeartCircle, Help, Instagram, SearchIcon, Whatsapp } from "../icons";
import './Header.css'
import { useState } from "react";
import { useCategory } from "../../hooks/useCategory";
import { useEffect } from "react";

export function Header() {
  const {category} = useCategory()
  console.log(category)
  const [categoryButtons, setcategoryButtons] = useState({})
  useEffect(() =>{
    if(!category[0]) return 
    const newCategory = {
      nuevo:[
        {_id:1, name:"VER TODO"},
        {_id:2, name:"ROPITA"},
        {_id:3, name:"ACCESORIOS"}
      ],
      contacto:[
        {_id:4, name:"sobre mi"},
        {_id:5, name:"whatsapp"},
        {_id:6, name:"instagram"}
      ]
    }
    const ropita = category.filter( e => e.type === "ropa")
    const accesorios = category.filter( e => e.type === "accesorios")
    ropita.unshift({_id:8, name:"VER TODO"})
    accesorios.unshift({_id:9, name:"VER TODO"})
    newCategory.ropita = ropita
    newCategory.accesorios = accesorios
    setcategoryButtons(newCategory)
  },[category])
  
  return (
    <>
      <nav>
        <div className="nav_sup">
          <form className="search">
            <label><SearchIcon/></label>
            <input name='search'/>
          </form>
          <a href="#">
            <img src="https://ik.imagekit.io/z87g9nhhp/imgPrincipal/logo_c7LbIq7DK.png?updatedAt=1690219112145" alt="logo Be Merry" />
          </a>
          <div className="icons">
            <div className="icon_menu">
              <label><HeartCircle/></label>
              <label><BagHandle/></label>
            </div>
            <label><Instagram/></label>
            <label><Whatsapp/></label>
            <label><Help/></label>
          </div>
        </div>{
          categoryButtons.accesorios && categoryButtons.ropita &&
        <div className="nav_inf">
          <div className="drop_menu">
            <button
              className="nav_inf_btn btn"

            >
              NUEVO
            </button>
            <div>
              <ul className="yellowList">
                {
                  categoryButtons.nuevo.map((item) =>(
                    <li key={item._id}>
                      <a to="#"> { item.name } </a>
                    </li>

                  ))
                }
              </ul>
            </div>
          </div>
          <div className="drop_menu">
            <button
              className="nav_inf_btn btn"

            >
              ROPITA
            </button>
            <div>
              <ul className="yellowList">
                {
                  categoryButtons.ropita.map((item) =>(
                    <li key={item._id}>
                      <a to="#"> { item.name } </a>
                    </li>

                  ))
                }
              </ul>
            </div>
          </div>
          <div className="drop_menu">
            <button
              className="nav_inf_btn btn-rose"

            >
              ACCESORIOS
            </button>
            <div>
              <ul className="pinkList">
                {
                  categoryButtons.accesorios.map((item) =>(
                    <li key={item._id}>
                      <a to="#"> { item.name } </a>
                    </li>

                  ))
                }
              </ul>
            </div>
          </div>
          <div className="drop_menu">
            <button
              className="nav_inf_btn btn-red"

            >
              CONTACTO
            </button>
            <div>
              <ul className="redList">
                {
                  categoryButtons.contacto.map((item) =>(
                    <li key={item._id}>
                      <a to="#"> { item.name } </a>
                    </li>

                  ))
                }
              </ul>
            </div>
          </div>
              </div>}
      </nav>
    </>
  )
}