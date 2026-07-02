import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Layout
import Shell from '@/components/layout/Shell';

// Pages
import Home from '@/pages/home';
import About from '@/pages/about';
import Courses from '@/pages/courses';
import Pricing from '@/pages/pricing';
import Teachers from '@/pages/teachers';
import Credentials from '@/pages/credentials';
import Contact from '@/pages/contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Shell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/credentials" component={Credentials} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Shell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
