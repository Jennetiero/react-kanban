import styled from 'styled-components';

export const Navbar = styled.nav`
	background-color: #ffffff;
	border-bottom: 1px solid #f3f3f3;
`;

export const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding: 15px 20px;
	display: flex;
	align-items: center;
`;

export const AddButton = styled.button`
	justify-content: center;
	align-items: center;
	padding: 8px 20px;
	margin-right: 10px;
	width: 119px;
	height: 40px;
	background: #0094ff;
	border-radius: 50px;
	border: none;
	color: #ffffff;
`;

export const DropList = styled.div`
	width: 130px;
	display: none;
	position: absolute;
	top: 100%;
	left: 0;
	padding-top: 1rem;
`;

export const DropDownWrapper = styled.div`
	width: 100%;
	background: #fff;
	box-shadow: 0 0 16px #0000001a;
	border-radius: 0.5rem;
	overflow: hidden;
	padding: 0.5rem;
`;

export const DropDownItem = styled<any>('div')`
	padding: 0.8rem;
	background: #fff;
	transition: all 0.2s ease;
	border-radius: 0.5rem;

	&:hover {
		background-color: #e7e7e7;
	}
`;

export const DropDownIcon = styled('span')`
	display: flex;
	margin-left: 10px;
`;

export const DropUpIcon = styled('span')`
	display: none;
	margin-left: 10px;
`;

export const DropListField = styled.div`
	width: 100%;
	max-width: 119px;
	height: 40px;
	margin-right: 10px;
	background: #f5f8fa;
	border-radius: 50px;
	border: none;
	background: #f5f8fa;
	transition: all 0.2s ease;
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover,
	&:focus,
	&:active {
		background-color: #e7e7e7;
	}

	&:hover ${DropList} {
		display: block;
	}

	&:hover ${DropDownIcon} {
		display: none;
	}

	&:hover ${DropUpIcon} {
		display: flex;
	}
`;

export const DropListSelected = styled.p`
	padding: 8px 20px;
	display: flex;
	align-items: center;
	gap: 0.2rem;
`;

export const SearchInput = styled.input`
	width: 160px;
	height: 40px;
	margin-left: auto;
	background: #f5f8fa;
	border-radius: 50px;
	border: none;
	outline: none;
	padding-left: 14px;
`;

export const Notification = styled.img`
	margin-left: 15px;
`;
export const UserPhoto = styled.img`
	margin-left: 10px;
`;
