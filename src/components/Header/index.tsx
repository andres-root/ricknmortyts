import React, { FunctionComponent } from 'react';

import { HeaderContainer, Title, Subtitle } from './styles';


type HeaderProperties = {
  title: string;
  subtitle: string;
};

/** A react component that renders a header. */
const Header: FunctionComponent<HeaderProperties> = ({ title, subtitle }) => {
	return (
		<HeaderContainer>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</HeaderContainer>
	);
};

export default Header;
