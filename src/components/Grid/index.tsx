import React, { useState, useEffect, useCallback } from 'react';
import GridData from './GridData';
import Card from '../Card';

import { GridContainer } from './styles';


/** A react component that renders a grid of cards. */
const Grid = () => {
  const [items, fetchItems] = GridData();

  useEffect(() => {
    fetchItems();
  }, []);

	return (
		<GridContainer>
      {items && items.length > 0 && items.map(card => (
        <Card {...card} />
      ))}
		</GridContainer>
	);
};

export default Grid;
