import React, { FC } from 'react';
import Notifications from '../../assets/icons/Notification.png';
import Avatar from '../../assets/images/Avatar.png';
import DropDown from './DropDown';
import {
	AddButton,
	Container,
	DropDownIcon,
	DropDownItem,
	DropDownWrapper,
	DropList,
	DropListField,
	DropListSelected,
	DropUpIcon,
	Navbar,
	Notification,
	SearchInput,
	UserPhoto,
} from './Navbar.styled';

const NavbarMenu: FC = () => {
	return (
		<>
			<Navbar>
				<Container>
					<AddButton>+ Add new</AddButton>
					<DropDown
						option={[
							{
								label: 'Kanban',
								value: 'volvo',
							},
							{
								label: 'Saab',
								value: 'saab',
							},
							{
								label: 'Mercedes',
								value: 'mercedes',
							},
						]}
						onSelect={(value: string) => {
							console.log(value);
						}}
					/>
					<DropDown
						option={[
							{
								label: 'Filter',
								value: 'saab',
							},
							{
								label: 'Mercedes',
								value: 'mercedes',
							},
						]}
						onSelect={(value: string) => {
							console.log(value);
						}}
					/>
					<SearchInput placeholder="Search..." />
					<Notification src={Notifications} />
					<UserPhoto src={Avatar} />
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarMenu;
