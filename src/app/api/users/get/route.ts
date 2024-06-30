
import connect from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function GET(request: NextRequest){
    try {

       

        //check if user exists
        const user = await User.find({})
        
        console.log(user);
        
        
        //check if password is correct
       
        
        //create token data
       
        //create token
       
        const response = NextResponse.json({
            message: user,
            success: true,
        })
      
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
