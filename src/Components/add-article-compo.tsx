"use client";

import { axiosConf } from "@/config/axios-config";
import { useState } from "react";
import PageTitle from "@/Components/pageTitle";
import { IArticleInput, IUserLogin } from "@/types/interfaces";
import { categorieOtions, wilayaOptions } from "./add-article-data";


export default function AddArticleCompo() {
  const subCategorieOptions = [
    {
      id: 1,
      nom: "voiture",
      isVente: true,
      isLocation: true,
      // isDemande:true, il est possible de demander tout
    }
  ]

  // manage form data state
  const [formData, setFormData] = useState<IArticleInput>(
    {
      categorie: "1",
      categorieId: 1,

      subcategorie: "maison",
      subcategorieId: 1,

      lieu: "ndb",
      lieuId: 1,

      prix: 5000,
      description: "  "
    },
  );


  function handleChange(event: any) {
    const { name, value } = event.target;
    console.log({ name, value })
    // prevFormData les donnees actuel de l'objet formData
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });


  }




  const sendArticle = async () => {
    const token = localStorage.getItem("jwt")
    console.log(formData)
    await axiosConf
      .post(`api/wilayas`, {
        data: {
          name: "Adrar"
        }
      }, {
        headers: {
          'Authorization': `Bearer ${token}`, // Add the Bearer token to the Authorization header
          'Content-Type': 'application/json' // Set the content type if needed
        }
      }

      )
      .then((d) => {
        console.log(d);
        // save token
        //localStorage.setItem("jwt",d.data.jwt)
        // redirect to my article

        //location.assign("/my/list");
      })
      .catch((e) => {
        console.log(e);
        // showm errors in login form
        //setError("email or password is incorrect");
      });
    /*
    await axios
      .post(
        "/api/article/add",
        {
          ...formData
        }
      )
      .then(_ => { console.log("") })
      .catch(e => console.log(e))
 
  */
  }
  return (
    <>
      <PageTitle title="add" />
      <form className="mx-auto container grid gap-4 grid-cols-2">
        <div className="mb-4">
          <label
            htmlFor="categorie"
            className="block text-gray-700 font-bold mb-2"
          >
            categorie
          </label>
          <select

            id="categorie"
            onChange={handleChange}
            value={formData.categorie}
            name="categorie"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

          >
            {categorieOtions.map((label, index) => <option value={index + 1}>{label}</option>)}

          </select>

        </div>
        <div className="mb-6">
          <label
            htmlFor="subcategorieId"
            className="block text-gray-700 font-bold mb-2"
          >
            subcategorieId
          </label>
          <input


            onChange={handleChange}
            name="subcategorieId"
            value={formData.subcategorieId}
            type="number"
            id="subcategorieId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="lieu" className="block text-gray-700 font-bold mb-2">
            wilayas
          </label>
          <select

            id="wilaya"
            onChange={handleChange}
            value={formData.lieu}
            name="lieu"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

          >
            {wilayaOptions.map((label, index) => <option value={index + 1}>{label}</option>)}
          </select>
          {/* <input
            onChange={handleChange}
            name="lieu"
            value={formData.lieu}

            type="text"
            id="lieu"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> */}
        </div>
        <div className="mb-6">
          <label htmlFor="titel" className="block text-gray-700 font-bold mb-2">
            titel
          </label>
          <input
            type="text"
            id="titel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            description
          </label>
          <input
            type="text"
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="prix" className="block text-gray-700 font-bold mb-2">
            prix
          </label>
          <input
            type="text"
            id="prix"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between col-span-2">
          <button
            onClick={async (ev) => { ev.preventDefault(); await sendArticle() }}
            type="submit"
            className="mt-4 bg-secondary text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            send wilaya
          </button>
        </div>
      </form>
    </>
  );
}
