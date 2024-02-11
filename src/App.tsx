
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppBar, Tab } from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';
import { LandingPageFocusStack } from './pages/focus_stack';
import { FocusStackPage1 } from './pages/focus_stack/page1';

function App() {
  const [tabValue, setTabValue] = React.useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const mainPage = () => {
    return <div className="App">
            <header className="App-header">
              <TabContext value={tabValue}>
                <AppBar position="fixed" color="inherit" sx={{ width: 1 }}>
                  <TabList onChange={handleTabChange} variant="fullWidth">
                    <Tab label="Focus Stacking" value="1" />
                    <Tab label="???" value="2" />
                  </TabList>
                </AppBar>
                <TabPanel value="1">
                  <LandingPageFocusStack />
                </TabPanel>
                <TabPanel value="2">Work In Progress</TabPanel>
              </TabContext>
            </header>
          </div>
  }

  const router = () => createHashRouter([
    {
      path: "/",
      element: mainPage()
    },
    {
      path: "/focus_stack/1",
      element: FocusStackPage1()
    }
  ]);

  return (
    <RouterProvider router={router()}/>
  );
}

export default App;
