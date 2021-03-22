import React, { FunctionComponent } from 'react';

import { CardContainer, ImageContainer, Image, Info, Row, Key, Value, Name } from './styles';


type LocationProperties = {
  name: string;
  url: string;
};

type CardProperties = {
  id: number;
  image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
	origin: LocationProperties;
	location: LocationProperties;
};

/** A react component that renders a card. */
const Card: FunctionComponent<CardProperties> = ({
  id,
	image,
	name,
	status,
	species,
	gender,
	origin,
	location,
}) => {
	return (
		<CardContainer>
			<ImageContainer>
				<Image src={image} />
				<Name>{name}</Name>
			</ImageContainer>
			<Info>
				<Row key={id}>
					<Key>status</Key>
					<Value>
						{status}
					</Value>
				</Row>
				<Row key={id}>
					<Key>species</Key>
					<Value>
						{species}
					</Value>
				</Row>
				<Row key={id}>
					<Key>gender</Key>
					<Value>
						{gender}
					</Value>
				</Row>
				<Row key={id}>
					<Key>origin</Key>
					<Value>
						{origin.name}
					</Value>
				</Row>
				<Row key={id}>
					<Key>last location</Key>
					<Value>
						{location.name}
					</Value>
				</Row>
			</Info>
		</CardContainer>
	);
};

export default Card;
