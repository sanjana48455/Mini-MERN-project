import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post(
            "https://mini-mern-project-3utv.vercel.app/create-post",
            formData
        )
        .then((res) => {
            console.log("Post created successfully")
            navigate("/feed")
        })
        .catch((err) => {
            console.log(err)
            alert("Error creating post")
        })
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: "65px",
                fontFamily: "Arial, sans-serif"
            }}
        >

            <section
                style={{
                    width: "800px",
                    background: "#ffffff",
                    padding: "65px 50px 50px",
                    borderRadius: "20px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        margin: "0 0 40px",
                        color: "#14213d",
                        fontFamily: "Georgia, serif"
                    }}
                >
                    Upload your favorite photo
                </h1>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px"
                    }}
                >

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        required
                        style={{
                            width: "100%",
                            boxSizing: "border-box",
                            padding: "20px",
                            border: "2px dashed #8abaff",
                            borderRadius: "15px",
                            background: "#f4f8ff",
                            fontSize: "16px"
                        }}
                    />

                    <input
                        type="text"
                        name="caption"
                        placeholder="Enter caption"
                        required
                        style={{
                            width: "100%",
                            boxSizing: "border-box",
                            padding: "20px",
                            border: "1px solid #d1d5db",
                            borderRadius: "15px",
                            fontSize: "20px",
                            outline: "none"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "18px",
                            background: "#2864e8",
                            color: "white",
                            border: "none",
                            borderRadius: "15px",
                            fontSize: "23px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        Submit
                    </button>

                </form>

            </section>

        </div>
    )
}

export default CreatePost