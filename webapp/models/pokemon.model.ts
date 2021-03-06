export class Pokemon {
	constructor(
		public pokedex_number : number,
		public name: string,
		public species: string,
		public attack_iv : number,
		public defense_iv : number,
		public stamina_iv : number,
		public current_hp: number,
		public max_hp: number,
		public iv_percentage: number,
		public cp: number,
		public favorite: boolean,
		public candy: number,
		public family_name: string,
		public id: any,
		public move_1: number,
		public move_2: number,
		public pokeball: number,
		public battles_attacked: number,
		public battles_defended: number,
		public attacks: any,
		public type_1: string,
		public type_2: string
	){ }
}
