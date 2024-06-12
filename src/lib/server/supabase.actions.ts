"use server";

import { createClient } from "../utils/supabase/server";

export async function registerBetaAccess({
  email,
  xHandle,
}: {
  email?: string;
  xHandle?: string;
}) {
  console.log("email", email);
  const supabase = createClient();

  // Initialize an empty array for the insertion data
  const insertData: { email?: string; x_handle?: string } = {};

  // Conditionally add email and xHandle to insertData
  if (email) insertData.email = email;
  if (xHandle) insertData.x_handle = xHandle;

  // Perform the insert operation only if there's data to insert
  if (Object.keys(insertData).length > 0) {
    const { data, error } = await supabase
      .from("beta_signups")
      .insert([insertData])
      .select();

    if (error) {
      console.log("🔴 Supabase error at registerBetaAccess()", error);
      return error;
    } else {
      console.log("data", data);
      return data;
    }
  } else {
    console.log("No data provided to insert.");
  }
}
