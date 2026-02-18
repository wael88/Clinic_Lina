import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import BeforeAfter from "@/pages/BeforeAfter";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/">{() => <Home />}</Route>
      <Route path="/before-after">{() => <BeforeAfter />}</Route>
      <Route path="/contact">{() => <Contact />}</Route>
      <Route path="/thank-you">{() => <ThankYou />}</Route>

      <Route path="/bg">{() => <Home lang="bg" />}</Route>
      <Route path="/bg/before-after">{() => <BeforeAfter lang="bg" />}</Route>
      <Route path="/bg/contact">{() => <Contact lang="bg" />}</Route>
      <Route path="/bg/thank-you">{() => <ThankYou lang="bg" />}</Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
