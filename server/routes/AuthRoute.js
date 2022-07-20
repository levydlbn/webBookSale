import express from 'express'
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
// import verifyToken from '../Middleware/verifyToken.js'
// import verityTokenTeacher from '../Middleware/verifiyTokenTeacher.js'
import User from '../models/UserModel.js'

const auth = express.Router()

let refreshTokens = []

// auth for student
auth.post("/login/user", asyncHandler(
    async(req, res) => {
        try {
            const user = await User.findOne({ nameuser: req.body.nameuser })
            if (!user) {
                return res.status(404).json("Wronsdfdsg username")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!validPassword) {
                return res.status(404).json("Wrong Password")
            }
            // if (user && validPassword) {
            //     const accessToken = jwt.sign({
            //             id: user.id,
            //         },
            //         process.env.JWT_ACCESS_KEY, { expiresIn: "20d" })

            //     const refreshToken = jwt.sign({
            //             id: user.id,
            //         },
            //         process.env.JWT_REFRESH_KEY, { expiresIn: "30d" })

            //     refreshTokens.push(refreshToken)

            //     res.cookie("refreshToken", refreshToken, {
            //         httpOnly: true,
            //         secure: false,
            //         path: "/",
            //         sameSite: "strict",
            //     })
            const { password, ...others } = user._doc
            return res.status(200).json({...others })

        } catch (error) {
            return res.status(404).json(error)
        }
    }
))

auth.post("/register/user", asyncHandler(
    async(req, res) => {

        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            const registerUser = await new User({
                name: req.body.name,
                nameuser: req.body.nameuser,
                email: req.body.email,
                password: hashed,
                sdt: req.body.sdt,
                location: req.body.location,
                birtday: req.body.birtday,
            })

            await registerUser.save()
            res.status(200).send("register user success")

        } catch (error) {
            res.status(500).send("hello ae")
        }
    }))


//auth for teacher
// auth.post("/login/teacher", asyncHandler(
//     async(req, res) => {
//         try {
//             const user = await Teacher.findOne({ TENDN: req.body.TENDN })
//             if (!user) {
//                 return res.status(404).json("Wrong username")
//             }
//             const validPassword = await bcrypt.compare(
//                 req.body.PASSWORD,
//                 user.PASSWORD
//             )
//             if (!validPassword) {
//                 return res.status(404).json("Wrong Password")
//             }
//             if (user && validPassword) {
//                 const accessToken = jwt.sign({
//                         id: user.id,
//                         USERTYPE: user.USERTYPE
//                     },
//                     process.env.JWT_ACCESS_KEY, { expiresIn: "20d" })
//                 const refreshToken = jwt.sign({
//                         id: user.id,
//                         USERTYPE: user.USERTYPE
//                     },
//                     process.env.JWT_REFRESH_KEY, { expiresIn: "30d" })

//                 refreshTokens.push(refreshToken)

//                 res.cookie("refreshToken", refreshToken, {
//                     httpOnly: true,
//                     secure: false,
//                     path: "/",
//                     sameSite: "strict",
//                 })
//                 const { PASSWORD, ...others } = user._doc
//                 return res.status(200).json({...others, accessToken })
//             }
//         } catch (error) {
//             return res.status(404).json(error)
//         }
//     }
// ))

auth.post("/refreshToken", asyncHandler(
        async(req, res) => {
            const refreshToken = req.cookies.refreshToken
            if (!refreshToken) return res.status(401).json("You're not authenticated")
            if (!refreshTokens.includes(refreshToken)) {
                return res.status(403).json("Refresh token is not valid")
            }
            jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
                if (err) {
                    console.log(err)
                }
                refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
                    // tao moi accesstoken
                const newAccessToken = jwt.sign({
                        id: user.id,
                        USERTYPE: user.USERTYPE
                    },
                    process.env.JWT_ACCESS_KEY, { expiresIn: "20s" })
                const newRefreshToken = jwt.sign({
                        id: user.id,
                        USERTYPE: user.USERTYPE
                    },
                    process.env.JWT_REFRESH_KEY, { expiresIn: "30d" })

                refreshTokens.push(newRefreshToken)

                res.cookie("refreshToken", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                return res.status(200).json({ accessToken: newAccessToken })
            })
        })

)


// //Log Out Student
// auth.post("/logout/student", verifyToken, async(req, res) => {
//     req.session = null
//     return res.status(200).json(null)
// })

//Log Out Teacher
auth.post("/logout/user", async(req, res) => {
    req.session = null
    return res.status(200).json(null)
})



export default auth