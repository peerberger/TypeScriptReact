import { FC, useState } from "react";

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	foo?: (name: string) => string; // the second 'string' is the return type
	obj?: {
		f1: string
	};
	personObj?: Person;
}

interface Person {
	name: string;
	age: number;
}

const TextField : FC<Props> = () => {

	const [count, setCount] = useState<number | null | undefined>(5);

	setCount(undefined);

	const [person, setPerson] = useState<Person>({name: 'bob', age: 22});
	
	return (
		<div>
			<input />
		</div>
	);
}

export default TextField;