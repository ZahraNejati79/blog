import { cookies } from "next/headers";

export async function middlewareAuth(request) {
  const accessToken = request.cookies.get("accessToken");
  const refreshToken = request.cookies.get("refreshToken");

  const options = {
    method: "GET",
    Credential: "include",
    headers: {
      Cookie: `${accessToken.name}=${accessToken.value}; ${refreshToken.name}=${refreshToken.value};`,
    },
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    options
  );

  const { data } = await res.json();
  const { user } = data || {};
  return user;
}
