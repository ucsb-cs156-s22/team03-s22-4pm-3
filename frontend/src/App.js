import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import ProfilePage from "main/pages/ProfilePage";
import AdminUsersPage from "main/pages/AdminUsersPage";

import TodosIndexPage from "main/pages/Todos/TodosIndexPage";
import TodosCreatePage from "main/pages/Todos/TodosCreatePage";
import TodosEditPage from "main/pages/Todos/TodosEditPage";
import ArticlesIndexPage from "main/pages/Articles/ArticlesIndexPage";
import ReviewsIndexPage from "main/pages/Reviews/ReviewsIndexPage";
import MenuItemIndexPage from "main/pages/MenuItem/MenuItemIndexPage";
import HelpRequestIndexPage from "main/pages/HelpRequest/HelpRequestIndexPage";

import RecommendationIndexPage from "main/pages/Recommendation/RecommendationIndexPage";

import DiningCommonsIndexPage from "main/pages/DiningCommons/DiningCommonsIndexPage";
import OrganizationsIndexPage from "main/pages/Organizations/OrganizationsIndexPage";

import UCSBDatesIndexPage from "main/pages/UCSBDates/UCSBDatesIndexPage";
import UCSBDatesCreatePage from "main/pages/UCSBDates/UCSBDatesCreatePage";
import UCSBDatesEditPage from "main/pages/UCSBDates/UCSBDatesEditPage";

import { hasRole, useCurrentUser } from "main/utils/currentUser";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const { data: currentUser } = useCurrentUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />

        {
          hasRole(currentUser, "ROLE_ADMIN") && <Route exact path="/admin/users" element={<AdminUsersPage />} />
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/Recommendation/list" element={<RecommendationIndexPage />} />
            </>
          )
        }        
        { 
          hasRole(currentUser, "ROLE_ADMIN") && (
            <>
              <Route exact path="/helprequest/list" element={<HelpRequestIndexPage />} />
            </>
          )
        }
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route exact path="/todos/list" element={<TodosIndexPage />} />
            <Route exact path="/todos/create" element={<TodosCreatePage />} />
            <Route
              exact
              path="/todos/edit/:todoId"
              element={<TodosEditPage />}
            />
          </>
        )}
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route
              exact
              path="/diningCommons/list"
              element={<DiningCommonsIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route
              exact
              path="/organizations/list"
              element={<OrganizationsIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route
              exact
              path="/articles/list"
              element={<ArticlesIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route exact path="/menuitem/list" element={<MenuItemIndexPage />} />
          </>
        )}
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route exact path="/reviews/list" element={<ReviewsIndexPage />} />
          </>
        )}
        {hasRole(currentUser, "ROLE_USER") && (
          <>
            <Route
              exact
              path="/ucsbdates/list"
              element={<UCSBDatesIndexPage />}
            />
          </>
        )}
        {hasRole(currentUser, "ROLE_ADMIN") && (
          <>
            <Route
              exact
              path="/ucsbdates/edit/:id"
              element={<UCSBDatesEditPage />}
            />
            <Route
              exact
              path="/ucsbdates/create"
              element={<UCSBDatesCreatePage />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
