import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../Store/TabsContext';
import classNames from 'classnames';

export const TabsList = () => {
  const tabs = useTabs();
  const { tabId } = useParams();

  const selectedTabId = tabId ? tabId : '';
  const selectedTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames('', {
                'is-active': selectedTabId === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
          {/* <li className="is-active" data-cy="Tab">
            <a href="#tab-1" data-cy="TabLink">
              Tab 1
            </a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-2" data-cy="TabLink">
              Tab 2
            </a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-3" data-cy="TabLink">
              Tab 3
            </a>
          </li> */}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab ? <p>Please select a tab</p> : selectedTab.content}
      </div>
    </>
  );
};
