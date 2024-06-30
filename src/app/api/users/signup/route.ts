import connect from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";



connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const { email, passWord} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
      
if( !email || !passWord){
    return NextResponse.json({error: "email or password is not given"}, {status: 400})
}
        const newUser = await User.create({
            
            email:email,
            passWord:passWord
        })

        
        console.log(newUser , 'I am saved user');

        //send verification email

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}