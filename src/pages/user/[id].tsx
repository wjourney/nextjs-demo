import { useRouter } from "next/router";
import React from "react";

function Index(){
  const router = useRouter()
  return <div>use detail{router.query.id}</div>
}
export default Index