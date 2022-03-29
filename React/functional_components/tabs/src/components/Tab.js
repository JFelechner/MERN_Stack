import React from 'react';

const Tab = (props) => {
    const { tabsList, currentTab, setCurrentTab } = props;

    const selectedTab = (choice) => {
        if (choice === currentTab) {
            return "selectedTab";
        } else {
            return "unselectedTab";
        }
    }

    const setSelectedTab = (choice) => {
        setCurrentTab(choice);
    }

    return (
        <div className="container px-4">
            <div className="row gx-5">
                <div className="col d-flex">
                    {
                        tabsList.map((tab, choice) => (
                            <div className={`${selectedTab(choice)}`} onClick={(e) => setSelectedTab(choice)}>
                                <a className="nav-link" aria-current="page" href="#">{tab.title}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tab;