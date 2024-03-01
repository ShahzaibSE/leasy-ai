import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <div className="flex xl:flex-row justify-between items-center">
      <div>
        <Image className="aspect-auto" alt='Leasy AI' src="/assets/leasy_ai_logo.png" width={284} height={56}/>
      </div>
      <div className="hidden xl:flex xl:visible xl:justify-between xl:items-center xl:gap-10">
        <div className="flex justify-between items-center xl:gap-4">
          <Link href={"#"}><p>Home</p></Link>
          <Link href={"#"}><p>Feature</p></Link>
          <Link href={"#"}><p>Pricing</p></Link>
          <Link href={"#"}><p>Login</p></Link>
        </div>
        <div>
          <Button size={"lg"} color="#CC860D">Book a Demo</Button>
        </div>
      </div>
    </div>
  )
}
