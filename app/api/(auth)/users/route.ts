import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/models/User";

// GET — رجّع كل المستخدمين
export async function GET() {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), { status: 200 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        console.error(error);

        return new NextResponse(
            JSON.stringify({ error: "Failed to fetch users" }),
            { status: 500 }
        );
    }
}
