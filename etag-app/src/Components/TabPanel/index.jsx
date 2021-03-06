import React, { useState } from 'react';

import PanelItem from '../ViewComponents/PanelItem';

import './index.scss'

function TabPanel(props) {
	const [selectedTab, setSelectedTab] = useState(0);

	const activateTab = (tab, key) => {
		setSelectedTab(key);
		props.onClickSelectedTab(tab, key)
	};
	return (
		<ul className='tabPanelContainer'>
			{props.tabPanelItems &&
				props.tabPanelItems.map((tab, key) => {
					return (
						<li
							key={tab._id}
							onClick={() => {activateTab(tab, key)}}
							className={selectedTab === key ? 'tabPanelContainer__list selected' :'tabPanelContainer__list'}
						>
							<PanelItem tabDetails={ tab } />
						</li>
					);
				})}
		</ul>
	);
}

export default React.memo(TabPanel);
