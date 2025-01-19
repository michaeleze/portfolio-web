interface CompanyNameProps {
  name: string;
}

export function CompanyName({ name }: CompanyNameProps) {
  return (
    <h1 className="text-lg md:text-xl lg:text-2xl font-medium whitespace-pre-line">
      {name}
    </h1>
  );
}

