class Melee : Enemy {
    public Melee(string Name) : base(Name) {
    Health = 120;
    base.AttackList.Add(new Attack("Punch",20));
    base.AttackList.Add(new Attack("Kick",15));
    base.AttackList.Add(new Attack("Tackle",25));
}
}