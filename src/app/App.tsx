import customHookQueryWithInterceptor from "@/lib/query/queryWithInterceptor";
import {QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = customHookQueryWithInterceptor();

    return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}

export default App;
