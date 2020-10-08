import React from 'react';
import '../App.css';
import Header from '../components/header.js';
import Projects from '../components/projects.js';

function BackerScreen() {
  return (
    <>
      <Header identity="4"/>
      <div>
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
              <Projects/>
              <Projects/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default BackerScreen;
