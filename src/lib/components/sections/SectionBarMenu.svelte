<script lang="ts">
	type TMenuItem = {
		name: string;
		price: string;
		description?: string;
	};

	type TMenuCategory = {
		title: string;
		subtitle?: string;
		items: TMenuItem[];
	};

	let menu: TMenuCategory[] = [
		{
			title: 'Пиво',
			subtitle: '330мл/500мл',
			items: [
				{ name: 'Krusovice Svetle', price: '90₴' },
				{ name: 'Krusovice Cerne', price: '90₴' },
				{ name: 'Hoegaarden', price: '100₴' },
				{ name: 'Stella Artois', price: '100₴' },
				// { name: 'Budweiser', price: '90₴' },
				{ name: 'Corona (330мл)', price: '120₴' },
				// { name: 'Guinness', price: '130₴' }
			]
		},
		{
			title: 'Закуски',
			items: [
				{ name: 'В’ялене м’ясо', price: '100₴' },
				{ name: 'Горішки', price: '80₴' },
				{ name: 'Сухарики в асортименті', price: '80₴' },
				{ name: 'Морозиво “Астронавт”', price: '150₴' }
			]
		},
		{
			title: 'Коктейлі з горілкою',
			items: [
				{ name: 'Закрутка (90мл)', price: '120₴', description: 'Горілка, апельсиновий сік' },
				{
					name: 'Мертвий рашист (90мл)',
					price: '140₴',
					description: 'Горілка, кофейний лікер'
				},
				{
					name: 'Космополітан (150мл)',
					price: '200₴',
					description: 'Горілка, тріпл сек, журавлинний сік, лаймовий сік'
				},
				{
					name: 'Блакитна лагуна (210мл)',
					price: '210₴',
					description: 'Горілка, блакитний кюросау, содова'
				}
			]
		},
		{
			title: 'Коктейлі з ромом',
			items: [
				{
					name: 'Мохіто (160мл)',
					price: '180₴',
					description: 'Білий ром, сироп, содова, лайм, м’ята'
				},
				{
					name: 'Куба лібре (140мл)',
					price: '200₴',
					description: 'Золотий ром, лаймовий сік, кока-кола, лайм'
				},
				{
					name: 'Піна коллада (150мл)',
					price: '200₴',
					description: 'Білий ром, темний ром, кокосовий сироп, лаймовий сік, ананасовий сік'
				},
				{
					name: 'Дайкірі (120мл)',
					price: '205₴',
					description: 'Білий ром, сироп, лаймовий сік'
				}
			]
		},
		{
			title: 'Коктейлі з віскі',
			items: [
				{ name: 'Іржавий цвях (75мл)', price: '190₴', description: 'Віскі, драмбуи ликер' },
				{
					name: 'Хрещенний батько (90мл)',
					price: '200₴',
					description: 'Віскі, лікер амаретто'
				},
				{
					name: 'Олд фешен (90мл)',
					price: '210₴',
					description: 'Бурбон, биттер, тростніковий цукор'
				},
				{
					name: 'Пеніциллін (140мл)',
					price: '210₴',
					description: 'Віскі, медовий сироп, лимонний сік'
				}
			]
		},
		{
			title: 'Коктейлі з джином',
			items: [
				{
					name: 'Негроні (120мл)',
					price: '200₴',
					description: 'Джин, червоний вермут, червоний біттер'
				},
				{
					name: 'Біла леді (120мл)',
					price: '200₴',
					description: 'Джин, тріпл сек, лимонний сік'
				},
				{
					name: 'Том коллінз',
					price: '210₴',
					description: 'Джин, сироп, лимонний сік, содова'
				},
				{
					name: 'Френч 75 (160мл)',
					price: '220₴',
					description: 'Джин, просекко, сироп, лимонний сік'
				}
			]
		},
		{
			title: 'Коктейлі з текілою',
			items: [
				{
					name: 'Сміливий казак (120мл)',
					price: '160₴',
					description: 'Текіла срібна, кофейний лікер'
				},
				{
					name: 'Заздрість (140мл)',
					price: '170₴',
					description: 'Текіла срібна, блакитний кюрасао, ананасовий сік'
				},
				{
					name: 'Текіла санрайз (200мл)',
					price: '200₴',
					description: 'Текіла срібна, гренадін, апельсиновий сік'
				},
				{
					name: 'Маргарита (120мл)',
					price: '210₴',
					description: 'Текіла срібна, тріпл сік, сироп, лаймовий сік'
				}
			]
		},
		{
			title: 'Коктейлі з просекко',
			items: [
				{ name: 'Мімоза (140мл)', price: '190₴', description: 'Просекко, апельсиновий сік' },
				{
					name: 'Белліні (200мл)',
					price: '210₴',
					description: 'Просекко, сироп, лимонний сік, персикове пюре'
				},
				{
					name: 'Апероль шприц (290мл)',
					price: '220₴',
					description: 'Просекко, апероль, содова'
				},
				{
					name: 'Небесне сяйво (200мл)',
					price: '240₴',
					description: 'Текіла, джин, горілка, білий ром, тріпл сік, просекко'
				}
			]
		},
		{
			title: 'Зіркові коктейлі',
			items: [
				{
					name: 'Космічний Еліксир',
					price: '180₴',
					description: 'Джин, лимонний сік, цукровий сироп, базилік '
				},
				{
					name: 'Супернова',
					price: '180₴',
					description: 'Горілка, гренадин, содова'
				},
				{
					name: 'Марсіанський Захід',
					price: '180₴',
					description: 'Джин, цукровий сироп, гранатовий сік, лаймовий сік'
				},
				{
					name: 'Кровавий місяць',
					price: '200₴',
					description: 'Віскі, гранатовий сік '
				},
				{
					name: 'Рожева планета',
					price: '220₴',
					description:
						'Текіла, кампарі, грейпфрутовий сік, грейпфрутовий сироп, лаймовий сік, содова'
				},
				{
					name: 'Темна матерія',
					price: '220₴',
					description: 'Текіла, єгермейстер, вишневий сік, лимонний сік'
				},
				{
					name: 'Сонце',
					price: '220₴',
					description: 'Бурбон, ананасовий сік, лимонний сік, '
				},
				{
					name: 'Зоряний Жаб’як',
					price: '240₴',
					description: 'Абсент, просекко'
				},
				{
					name: 'Зелена комета',
					price: '260₴',
					description: 'Джин, текіла, ром, абсент '
				},
				{
					name: 'Астероїдний поцілунок',
					price: '260₴',
					description: 'Бурбон, апероль, цукровий сироп, просекко '
				}
			]
		},
		{
			title: 'Шоти',
			items: [
				{
					name: 'Б-52',
					price: '120₴',
					description: 'Кавовий лікер, айріш крім, тріпл сек'
				},
				{
					name: 'Хіросіма',
					price: '120₴',
					description: 'Самбука, абсент, айриш крім, гренадін'
				},
				{
					name: 'Зелений мексиканець',
					price: '120₴',
					description: 'Текіла, лікер, лимонний сік'
				}
			]
		},
		{
			title: 'Безалкогольні',
			items: [
				{
					name: 'Мінеральна вода газована/негазована (500мл)',
					price: '40₴'
				},
				{
					name: 'Сік в асортименті (200мл)',
					price: '45₴'
				},
				{
					name: 'Кола/Фанта/Спрайт (330мл)',
					price: '50₴'
				},
				{
					name: 'Швепс мандарин/гранат/тонік (330мл)',
					price: '55₴'
				},
				{
					name: 'Мохіто',
					price: '130₴'
				},
				{
					name: 'Лимонад в асортименті',
					price: '90₴/140₴'
				}
			]
		},
		{
			title: 'Класичні чаї',
			items: [
				{ name: 'Зелений', price: '100₴' },
				{ name: 'Чорний', price: '100₴' },
				{ name: 'Трав’яний', price: '100₴' }
			]
		},
		{
			title: 'Органічні чаї',
			subtitle: '600мл',
			items: [
				{ name: 'Малина-Апельсин', price: '120₴' },
				{ name: 'Вишня-Смородина', price: '120₴' },
				{ name: 'Імбир-Журавлина', price: '120₴' },
				{ name: 'Обліпиха-Мед-Імбир', price: '120₴' },
				{ name: 'Апельсин-М’ята', price: '120₴' },
				{ name: 'Липа-М’ята', price: '120₴' },
				{ name: 'Мараканський', price: '120₴' },
				{ name: 'Саусеп', price: '120₴' },
				{ name: 'Каркаде', price: '120₴' },
				{ name: 'Лісові ягоди', price: '120₴' }
			]
		},
		{
			title: 'Китайські чаї',
			subtitle: '800мл',
			items: [
				{ name: 'Улун', price: '160₴' },
				{ name: 'Шу Пуер', price: '160₴' },
				{ name: 'Шен Пуер ', price: '160₴' },
				{ name: 'Ті Гуань Інь', price: '160₴' },
				{ name: 'Да Хун Пао', price: '160₴' },
				{ name: 'Бай Му Дань', price: '160₴' }
			]
		},
		{
			title: 'Кава',
			items: [
				{ name: 'Сироп', price: '15₴' },
				{ name: 'Еспрессо', price: '50₴' },
				{ name: 'Американо', price: '50₴' },
				{ name: 'Американо з молоком', price: '60₴' },
				{ name: 'Латте', price: '60₴' },
				{ name: 'Капучино', price: '60₴' },
				{ name: 'Флет Уайт', price: '60₴' }
			]
		}
	];
</script>

<section id="menu" class="font-audiowide container pb-25">
	<h4
		class="main-title bg-gradient-to-tr from-stone-800 via-stone-400 to-violet-900 bg-clip-text text-center text-5xl font-bold text-transparent underline"
	>
		Меню
	</h4>

	<div class="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
		{#each menu as category}
			<div>
				<div class="mb-2.5 flex items-center">
					<p
						class="mr-5 bg-gradient-to-b from-zinc-600 via-purple-300 to-rose-600 bg-clip-text text-4xl text-nowrap text-transparent max-md:text-3xl"
					>
						{category.title}
					</p>

					<hr class="w-full border-dashed" />

					{#if category.subtitle}
						<span class="ml-5 text-2xl max-md:text-base">{category.subtitle}</span>
					{/if}
				</div>

				<ul class="flex flex-col text-2xl max-md:text-lg">
					{#each category.items as item}
						<li>
							<div class="flex justify-between">
								<p>
									{item.name}
								</p>

								<span>
									{item.price}
								</span>
							</div>

							{#if item.description}
								<hr class="w-full" />

								<p class="mb-1.5 text-base">
									{item.description}
								</p>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
