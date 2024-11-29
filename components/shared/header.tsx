import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/container';
import { User, ShoppingCart, ArrowRight  } from 'lucide-react';
import { Button } from "@/components/ui";
import React from "react";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className="flex items-center justify-between py-8">

				<div className="flex items-center gap-4">
					<Image src={'/logo.png'} width={35} height={35} alt={'NextPizza'} />
					<div>
						<h1 className="text-2xl uppercase font-black">next pizza</h1>
						<p className="text-sm text-gray-400 leading-3">вкуснее уже некуда</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Button className="flex items-center gap-1" variant="outline">
						<User size={16} />
						Войти
					</Button>

					<div>
						<Button className="group relative">
							<b>520 ₽</b>
							<span className="h-full w-[1px] bg-white/30 mx-3"></span>
							<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
								<ShoppingCart className="relative" size={16} strokeWidth={2}/>
								<b>3</b>
							</div>
							<ArrowRight className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" size={20}/>
						</Button>
					</div>
				</div>

			</Container>
		</header>
	);
};