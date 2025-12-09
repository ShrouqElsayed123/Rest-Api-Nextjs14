import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

// GET — رجّع كل المستخدمين
export async function GET() {
    try {
        await connect();
        const users = await User.find();
        return NextResponse.json(JSON.stringify(users

        ));
    }
    catch (error) {
        console.error(error); // هيتطبع الخطأ في الكونسول
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }

}