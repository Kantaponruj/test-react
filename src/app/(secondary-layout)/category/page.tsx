import { MedicineCard } from "@/components/medicine-card";

export default function AboutPage() {
  const medicineName = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 pt-0">
        {medicineName.map((name) => (
          <MedicineCard key={name} name={name}></MedicineCard>
        ))}
      </div>
    </div>
  );
}
