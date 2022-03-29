
import React from 'react';

const View = (props) => {
    const { tabsList, currentTab } = props;

    return (
        <div class="container px-4">
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3 border">
                        {tabsList[currentTab].view}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;