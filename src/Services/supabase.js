import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export async function clientMail(formData) {
  const { data, error } = await supabase.functions.invoke("contactFunctions", {
    body: formData,
  });

  console.log(error);

  return { data, error };
}
