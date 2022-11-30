import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
	DropDownIcon,
	DropDownItem,
	DropDownWrapper,
	DropList,
	DropListField,
	DropListSelected,
	DropUpIcon,
} from './Navbar.styled';

const DropDown = ({ option, onSelect }: { option: any; onSelect: any }) => {
	const [selectedItem, setSelectedItem] = useState(option[0].label);

	const onClick = (e: any) => {
		const label = e.target.innerText;
		const value = e.target.getAttribute('value');
		onSelect(value);
		setSelectedItem(label);
	};

	return (
		<>
			<DropListField>
				<DropListSelected>
					{selectedItem}
					<DropDownIcon>
						<IoIosArrowDown />
					</DropDownIcon>
					<DropUpIcon>
						<IoIosArrowUp />
					</DropUpIcon>
				</DropListSelected>
				<DropList>
					<DropDownWrapper>
						{option.map((item: any, i: number) => (
							<DropDownItem onClick={onClick} value={item.value}>
								{item.label}
							</DropDownItem>
						))}
					</DropDownWrapper>
				</DropList>
			</DropListField>
		</>
	);
};

export default DropDown;
