export const statePOC = `export const App = () => {
    const [switcherValue, setSwitcherValue] = useState(false);
    const [title] = useState("State");
    
  
    const handleToggle = useCallback(() => {
      setSwitcherValue(prev => !prev);
    }, []);
  
    return (
      <div>
        <Title title={title} />
        <Container onToggle={handleToggle} enabled={switcherValue} />
      </div>
    );
  };`;

export const statePOCTitleWithMemo = `export const Title = React.memo(({ title }: TitleProps) => {
    return (
        <h1>{title}</h1>
    );
  });
  
  Title.displayName = "Title";`
  
export  const contextPOC = `export const App = () => {
    return (
      <SwitcherProvider>
        <div>
          <Title />
          <Container />
        </div>
      </SwitcherProvider>
    );
};`;

export  const contextPOCProvider = `const SwitcherProvider = ({ children }: SwitcherProviderProps) => {
  const [switcherValue, setSwitcherValue] = useState(false);
  const [title] = useState("Context");

  const handleToggle = () => {
    setSwitcherValue(!switcherValue);
  };

  return (
    <SwitcherContext.Provider value={{ switcherValue, toggle: handleToggle, title }}>
      {children}
    </SwitcherContext.Provider>
  );
};

const useSwitcher = () => {
    const context = useContext(SwitcherContext);
    
    return context;
};`;

export  const contextPOCTitle = `export const Title = () => {
  const { title } = useSwitcher();

  return (
    <h1>{title}</h1>
  );
};`;

export  const contextPOCSwitcher = `export const Container = () => {
  const { switcherValue, toggle } = useSwitcher();
  
  return (
    <Switch onToggle={toggle} enabled={switcherValue} />
  );
};`;

export const zustandPOCStore = `export const useSwitcherStore = create<SwitcherStore>((set) => ({
  title: "Zustand",
  switcherValue: false,
  toggle: () => set((state) => ({ switcherValue: !state.switcherValue })),
}))`

export const zustandPOC = `export const App = () => {
  return (
    <div>
      <Title />
      <Container />
    </div>
  );
}`

export  const zustandPOCTitle = `export const Title = () => {
  const title = useSwitcherStore((state) => state.title);

  return (
    <h1>{title}</h1>
  );
};`;

export  const zustandPOCSwitcher = `export const Container = () => {
  const toggle = useSwitcherStore(state => state.toggle);
  const switcherValue = useSwitcherStore(state => state.switcherValue);

  return (
    <Switch onToggle={toggle} enabled={switcherValue} />
  );
};`;