import { Route, Switch } from "wouter";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";

export function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/404" component={NotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
